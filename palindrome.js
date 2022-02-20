function isPalindrome() {
    str = document.getElementById('check_palindrome').value.toString().trim();
    var revertStr = '';
    for ( let i = str.length - 1; i >= 0; i-- ) {
        revertStr = revertStr + str[i];
    }

    if ( str === revertStr ) {
        document.getElementById('answear').innerHTML = 'true';
        return true;
    }

    document.getElementById('answear').innerHTML = 'false';
    return false;
}