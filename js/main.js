
(function () {

    const sideMenu = document.querySelector('aside');
    const menuBtn = document.querySelector('#menu-btn');
    const closeBtn = document.querySelector('#close-btn');
    const themeToggle = document.querySelector('.theme-toggle');

    menuBtn.addEventListener('click', () => {
        sideMenu.style.display = 'block';
    });

    closeBtn.addEventListener('click', () => {
        sideMenu.style.display = 'none';
    });

    themeToggle.addEventListener('click', () => {
        document.body.classList.toggle('dark-theme-variables');

        themeToggle.firstElementChild.classList.toggle('active');
        themeToggle.lastElementChild.classList.toggle('active');

    });

})();


(function () {

    const table = document.querySelector('.recent-orders table tbody');

    orders.forEach(order => {
        const tr = document.createElement('tr');

        for (let orderEle in order) {

            const td = document.createElement('td');
            td.innerHTML = order[orderEle];
            tr.appendChild(td);

        }

        table.appendChild(tr);

    });


})();


(function () {

    const sideVarItems = document.querySelectorAll('.sidebar-item');

    sideVarItems.forEach((sideBar) => {
        sideBar.addEventListener('click', () => {

            const current = document.querySelector('.active');
            current.classList.remove('active');

            sideBar.classList.add('active');

        });
    });

})();
