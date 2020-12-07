window.addEventListener('DOMContentLoader', () => {

    const tabs = document.querySelectorAll('.tabheader__item'),
          tabsContent = document.querySelector('.tabcontent'),
          tabsParent = document.querySelector('.tabheader__items');

    function hideTabContent() {
        tabsContent.forEach(item => {
            item.style.display
        });
    }
});