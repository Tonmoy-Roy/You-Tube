function getime(total_seconds) {
    hours = parseInt(total_seconds / 3600);
    remaining_seconds = total_seconds % 3600;
    minutes = parseInt(remaining_seconds / 60);
    //seconds = remaining_seconds % 60;
    return `${hours} hour ${minutes} min`
}
// getime();