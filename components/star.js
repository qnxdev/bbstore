export default function setStar(r) {
    switch (r) {
        case 1: return ("1star.jpg");
        case 2: return ("2star.jpg");
        case 3: return ("3star.jpg");
        case 4: return ("4star.jpg");
        case 5: return ("5star.jpg");
        default: return ("0star.jpg");
    }
}