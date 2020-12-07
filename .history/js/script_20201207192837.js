window.addEventListener('DOMContentLoader', () => {

    const tabs = document.querySelectorAll('.tabheader__item'),
          tabsContent = document.querySelector('.tabcontent'),
          tabsParent = document.querySelector('.tabheader__items');

    function hideTabContent() {
        tabsContent.forEach(item => {
            item.style.display = 'none';

            tabs.forEach(item => {
                item.classList.remove('tabheader__item_active');
            });
        });
    }

    function showTabContent(i) {
        tabsContent[i].style.display = 'block';
    }
});