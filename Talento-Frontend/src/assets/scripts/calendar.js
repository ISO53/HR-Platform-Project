function calendar() {
    const calendarDays = document.querySelector(".calendar-days");
    const availabilityModal = document.getElementById("availabilityModal");
    const closeModal = document.querySelector(".close");
    const saveAvailabilityBtn = document.getElementById("save-availability");
    const dayInput = document.getElementById("day");
    const startTimeInput = document.getElementById("start-time");
    const endTimeInput = document.getElementById("end-time");
    const currentMonthEl = document.querySelector(".current-month");
    const prevMonthBtn = document.querySelector(".prev-month");
    const nextMonthBtn = document.querySelector(".next-month");

    let currentMonth = new Date().getMonth();
    let currentYear = new Date().getFullYear();

    function renderCalendar() {
        const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
        const firstDayOfMonth = new Date(currentYear, currentMonth, 1).getDay();
        calendarDays.innerHTML = "";

        const monthNames = ["Ocak", "Şubat", "Mart", "Nisan", "Mayıs", "Haziran", "Temmuz", "Ağustos", "Eylül", "Ekim", "Kasım", "Aralık"];
        currentMonthEl.textContent = `${monthNames[currentMonth]} ${currentYear}`;

        // Boş hücreler ekle (ayın başladığı gün öncesi)
        for (let i = 0; i < firstDayOfMonth; i++) {
            const emptyDiv = document.createElement("div");
            calendarDays.appendChild(emptyDiv);
        }

        // Günleri ekle
        for (let i = 1; i <= daysInMonth; i++) {
            const dayDiv = document.createElement("div");
            dayDiv.textContent = i;
            dayDiv.classList.add("day");
            dayDiv.addEventListener("click", () => openModal(i));
            calendarDays.appendChild(dayDiv);
        }
    }

    function openModal(day) {
        availabilityModal.style.display = "block";
        dayInput.value = day;
    }

    closeModal.onclick = function () {
        availabilityModal.style.display = "none";
    };

    window.onclick = function (event) {
        if (event.target === availabilityModal) {
            availabilityModal.style.display = "none";
        }
    };

    saveAvailabilityBtn.addEventListener("click", () => {
        const selectedDay = dayInput.value;
        const startTime = startTimeInput.value;
        const endTime = endTimeInput.value;

        if (startTime && endTime) {
            const dayDiv = calendarDays.querySelector(`div:nth-child(${selectedDay + firstDayOfMonth})`);
            dayDiv.classList.add("available");
            dayDiv.classList.remove("not-available");
        }

        availabilityModal.style.display = "none";
    });

    prevMonthBtn.addEventListener("click", () => {
        if (currentMonth === 0) {
            currentMonth = 11;
            currentYear--;
        } else {
            currentMonth--;
        }
        renderCalendar();
    });

    nextMonthBtn.addEventListener("click", () => {
        if (currentMonth === 11) {
            currentMonth = 0;
            currentYear++;
        } else {
            currentMonth++;
        }
        renderCalendar();
    });

    renderCalendar();
};
