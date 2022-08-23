function countPlayer(elementId){
    const newPlayerList = document.getElementById(elementId);
    const list = newPlayerList.children;
    if (list.length <= 4) {
        return true;
    }
    else {
        return false;
    }
}
