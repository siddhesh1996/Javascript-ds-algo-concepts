function likes(names) {
    // TODO
    let result = 'likes this'
    switch (names.length) {
        case 0:
            result = `no one ${result.replace('like','likes')}`
            break;
        case 1:
            result = `${names[0]} ${result.replace('like','likes')}`
            break;
        case 2:
            result = `${names[0]} and ${names[1]} ${result}`
            break;
        case 3:
            result = `${names[0]}, ${names[1]} and ${names[2]} ${result}`
            break;
        default:
            let othersCount = names.length - 2;
            result = `${names[0]}, ${names[1]} and ${othersCount} others ${result}`;
            break;
    }

    return result;
}

let names = ['Alex', 'Jacob', 'Mark', 'Max'];

console.log(likes(names));