export default {
    toString: (timestamp) => {
        let d = new Date(timestamp * 1000);
        let year = d.getFullYear();
        let month = d.getMonth() + 1;
        let day = d.getDate();
        return year + "-" + month + "-" + day;
    }
}