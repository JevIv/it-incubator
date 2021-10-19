function abbrevName(name){
    let separate = name.split(" ");
    let initials = (separate[0].charAt(0) + "." + separate[1].charAt(0)).toUpperCase();
    return initials;
}