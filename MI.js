window.onload = function() {
    const currentDate = new Date();
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    document.getElementById('current-date').textContent = currentDate.toLocaleDateString('en-US', options);

    $(document).ready(function() {
        $('#calendar').fullCalendar({
            // Set the default view to 'month'
            defaultView: 'month',
            
            // Ensure FullCalendar takes up the full height of the container
            height: 'auto',  // Automatically adjust to the height of the container
            
            // Optional: Customize the appearance, events, etc.
            header: {
                left: 'prev,next today',
                center: 'title',
                right: 'month,agendaWeek,agendaDay'
            },
        });
    });
};