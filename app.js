document.addEventListener('DOMContentLoaded', () => {
    
    // --- STATE MANAGEMENT ---
    let contacts = [
        { id: 1, name: "Ali Yılmaz", phone: "05551234567", msg: "Acil durum! Yardıma ihtiyacım var.", color: "E53935" },
        { id: 2, name: "Ayşe Kaya", phone: "05321234567", msg: "Acil durum! Yardıma ihtiyacım var.", color: "1E1E1E" }
    ];
    let selectedContactId = null; // null means 'Tüm Güvenli Kişiler'
    let contactToDelete = null;

    // --- GÖNDERİCİ (TELEFON 1) ELEMENTLERİ ---
    const senderScreenSos = document.getElementById('sender-screen-sos');
    const senderScreenSent = document.getElementById('sender-screen-sent');
    const senderScreenSettings = document.getElementById('sender-screen-settings');
    
    const btnSos = document.getElementById('btn-sos');
    const btnSettings = document.getElementById('btn-settings');
    const btnBackSos = document.getElementById('btn-back-sos');
    
    // Dropdown Elements
    const sosSelectBox = document.getElementById('sos-select-box');
    const sosDropdownList = document.getElementById('sos-dropdown-list');
    const sosSelectText = document.getElementById('sos-select-text');
    const sosSelectAvatar = document.getElementById('sos-select-avatar');
    
    // Lists
    const sentContactList = document.getElementById('sent-contact-list');
    const settingsContactList = document.getElementById('settings-contact-list');
    
    // Add Contact Elements
    const newContactName = document.getElementById('new-contact-name');
    const newContactPhone = document.getElementById('new-contact-phone');
    const btnAddContact = document.getElementById('btn-add-contact');
    
    // Delete Popup Elements
    const deletePopup = document.getElementById('delete-popup');
    const btnCancelDelete = document.getElementById('btn-cancel-delete');
    const btnConfirmDelete = document.getElementById('btn-confirm-delete');

    // --- ALICI (TELEFON 2) ELEMENTLERİ ---
    const receiverScreenStandby = document.getElementById('receiver-screen-standby');
    const receiverScreenChat = document.getElementById('receiver-screen-chat');
    
    const incomingNotification = document.getElementById('incoming-notification');
    const btnNotifView = document.getElementById('btn-notif-view');
    const btnNotifClose = document.getElementById('btn-notif-close');
    const btnBackStandby = document.getElementById('btn-back-standby');
    
    const chatMessages = document.getElementById('chat-messages');
    const chatInput = document.getElementById('chat-input');
    const btnSendMsg = document.getElementById('btn-send-msg');
    
    // --- EKRAN GEÇİŞ FONKSİYONU ---
    function switchScreen(containerSelector, newScreenId) {
        const screens = document.querySelectorAll(`${containerSelector} .screen`);
        screens.forEach(screen => screen.classList.remove('active'));
        document.getElementById(newScreenId).classList.add('active');
    }

    // --- RENDER FUNCTIONS ---
    function renderContacts() {
        // Render Settings List
        settingsContactList.innerHTML = '';
        contacts.forEach(c => {
            const item = document.createElement('div');
            item.className = 'saved-contact-item';
            item.innerHTML = `
                <div class="info-row">
                    <img src="https://ui-avatars.com/api/?name=${encodeURIComponent(c.name)}&background=${c.color}&color=fff" alt="Avatar" class="avatar">
                    <div class="details">
                        <span class="name">${c.name}</span>
                        <span class="phone-number">${c.phone}</span>
                    </div>
                    <button class="btn-icon delete" data-id="${c.id}"><i class="ph ph-trash"></i></button>
                </div>
                <div class="custom-message-box">
                    <input type="text" placeholder="Bu kişiye özel mesajınızı yazın" value="${c.msg}">
                </div>
            `;
            settingsContactList.appendChild(item);
        });

        // Attach Delete Listeners
        document.querySelectorAll('.btn-icon.delete').forEach(btn => {
            btn.addEventListener('click', (e) => {
                contactToDelete = parseInt(e.currentTarget.getAttribute('data-id'));
                deletePopup.style.display = 'flex';
            });
        });

        // Render Dropdown List
        sosDropdownList.innerHTML = `
            <div class="dropdown-item" data-id="all">
                <img src="https://ui-avatars.com/api/?name=Tum+Kisiler&background=random" alt="Avatar" class="avatar-small">
                <span>Tüm Güvenli Kişiler</span>
            </div>
        `;
        contacts.forEach(c => {
            const item = document.createElement('div');
            item.className = 'dropdown-item';
            item.setAttribute('data-id', c.id);
            item.innerHTML = `
                <img src="https://ui-avatars.com/api/?name=${encodeURIComponent(c.name)}&background=${c.color}&color=fff" alt="Avatar" class="avatar-small">
                <span>${c.name}</span>
            `;
            sosDropdownList.appendChild(item);
        });

        // Attach Dropdown Listeners
        document.querySelectorAll('.dropdown-item').forEach(item => {
            item.addEventListener('click', (e) => {
                const id = e.currentTarget.getAttribute('data-id');
                if (id === 'all') {
                    selectedContactId = null;
                    sosSelectText.textContent = "Tüm Güvenli Kişiler";
                    sosSelectAvatar.src = "https://ui-avatars.com/api/?name=Tum+Kisiler&background=random";
                } else {
                    selectedContactId = parseInt(id);
                    const c = contacts.find(contact => contact.id === selectedContactId);
                    sosSelectText.textContent = c.name;
                    sosSelectAvatar.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(c.name)}&background=${c.color}&color=fff`;
                }
                sosDropdownList.style.display = 'none';
            });
        });
    }

    function renderSentList() {
        sentContactList.innerHTML = '';
        const listToRender = selectedContactId 
            ? contacts.filter(c => c.id === selectedContactId) 
            : contacts;
            
        listToRender.forEach(c => {
            const item = document.createElement('div');
            item.className = 'contact-card';
            item.id = `sent-card-${c.id}`;
            item.innerHTML = `
                <img src="https://ui-avatars.com/api/?name=${encodeURIComponent(c.name)}&background=${c.color}&color=fff" alt="Avatar" class="avatar">
                <div class="contact-info">
                    <span class="name">${c.name}</span>
                    <span class="status status-waiting" id="status-${c.id}"><i class="ph ph-spinner-gap spin"></i> Bekleniyor</span>
                </div>
            `;
            sentContactList.appendChild(item);
        });
    }

    // --- CONTACT MANAGEMENT ---
    
    // Add Contact
    btnAddContact.addEventListener('click', () => {
        const name = newContactName.value.trim();
        let phone = newContactPhone.value.replace(/[^0-9]/g, ''); // Sadece rakamları al
        
        if (name && phone.length === 11) {
            const newId = Date.now();
            const colors = ['E53935', '1E1E1E', 'FFD54F', '4CAF50', '2196F3', '9C27B0'];
            const randomColor = colors[Math.floor(Math.random() * colors.length)];
            
            contacts.push({
                id: newId,
                name: name,
                phone: phone,
                msg: "Acil durum! Yardıma ihtiyacım var.",
                color: randomColor
            });
            
            newContactName.value = '';
            newContactPhone.value = '';
            renderContacts();
        } else {
            alert("Lütfen geçerli bir isim girin ve telefon numarasının 11 haneli (örn: 05551234567) olduğundan emin olun.");
        }
    });

    // Sadece rakam girişi için kontrol (11 hane maxlength HTML'de var)
    newContactPhone.addEventListener('input', function() {
        this.value = this.value.replace(/[^0-9]/g, '');
    });

    // Delete Contact
    btnCancelDelete.addEventListener('click', () => {
        deletePopup.style.display = 'none';
        contactToDelete = null;
    });

    btnConfirmDelete.addEventListener('click', () => {
        if (contactToDelete) {
            contacts = contacts.filter(c => c.id !== contactToDelete);
            
            // If the deleted contact was selected, reset to All
            if (selectedContactId === contactToDelete) {
                selectedContactId = null;
                sosSelectText.textContent = "Tüm Güvenli Kişiler";
                sosSelectAvatar.src = "https://ui-avatars.com/api/?name=Tum+Kisiler&background=random";
            }
            
            renderContacts();
        }
        deletePopup.style.display = 'none';
        contactToDelete = null;
    });

    // --- DROPDOWN TOGGLE ---
    sosSelectBox.addEventListener('click', () => {
        sosDropdownList.style.display = sosDropdownList.style.display === 'none' ? 'block' : 'none';
    });
    
    // Close dropdown when clicking outside
    document.addEventListener('click', (e) => {
        if (!e.target.closest('.dropdown')) {
            sosDropdownList.style.display = 'none';
        }
    });

    // --- TELEFON 1 ETKİLEŞİMLERİ ---
    btnSettings.addEventListener('click', () => {
        switchScreen('#phone-sender', 'sender-screen-settings');
    });

    btnBackSos.addEventListener('click', () => {
        switchScreen('#phone-sender', 'sender-screen-sos');
    });

    btnSos.addEventListener('click', () => {
        if(contacts.length === 0) {
            alert("Lütfen önce bir kişi ekleyin.");
            return;
        }
        
        renderSentList();
        switchScreen('#phone-sender', 'sender-screen-sent');
        
        // Push notification on Receiver
        setTimeout(() => {
            incomingNotification.classList.add('show');
        }, 800);
    });

    // --- TELEFON 2 ETKİLEŞİMLERİ ---
    btnNotifClose.addEventListener('click', () => {
        incomingNotification.classList.remove('show');
    });

    btnNotifView.addEventListener('click', () => {
        incomingNotification.classList.remove('show');
        switchScreen('#phone-receiver', 'receiver-screen-chat');
        
        // Görüldü durumunu Gönderici ekranına yansıt
        const statusElements = document.querySelectorAll('.status-waiting');
        statusElements.forEach(el => {
            el.className = 'status status-seen';
            el.innerHTML = '<i class="ph-fill ph-check-circle"></i> Görüldü';
        });
        
        if(chatMessages.children.length === 0) {
            appendMessage('Acil durum! Yardıma ihtiyacım var.', 'received');
        }
    });

    btnBackStandby.addEventListener('click', () => {
        switchScreen('#phone-receiver', 'receiver-screen-standby');
    });

    function sendMessage() {
        const text = chatInput.value.trim();
        if (text) {
            appendMessage(text, 'sent');
            chatInput.value = '';
            
            setTimeout(() => {
                chatMessages.scrollTop = chatMessages.scrollHeight;
            }, 100);
        }
    }

    btnSendMsg.addEventListener('click', sendMessage);
    chatInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') sendMessage();
    });

    function appendMessage(text, type) {
        const msgDiv = document.createElement('div');
        msgDiv.className = `message ${type}`;
        msgDiv.textContent = text;
        chatMessages.appendChild(msgDiv);
    }

    // INITIAL RENDER
    renderContacts();
});