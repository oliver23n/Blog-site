module.exports = {
    format_time: (date) => {
        const y = date.getFullYear();
        const m = date.getMonth();
        const d = date.getDate();
        return `${m}/${d}/${y}`;
    },

};
