export const filterGymsByTimeRange = (academys, start, end) => {
    return academys.filter(academy =>
        academy.schedules.some(item => item.hour >= startTime && item.hour <= endTime)
    ).map(academy => {
        const filteredSchedules = academy.schedules.map(schedule => {

            if ((schedule.weekdays === 'Sáb.' || schedule.weekdays === 'Dom.') && (schedule.hour >= start && schedule.hour <= end)) {
                return schedule;
            } 

            if (schedule.hour == 'Fechada') {
                return schedule
            }

            if (schedule.weekdays === 'Seg. à Sex.' && schedule.hour >= start && schedule.hour <= end) {
                return schedule;
            }

            return null;
        }).filter(schedule => schedule !== null);

        return {
            ...gym,
            schedules: filteredSchedules
        };
    });
}

