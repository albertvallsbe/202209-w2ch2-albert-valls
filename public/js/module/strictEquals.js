export const strictEquals = (a, b) => {


    if (Number.isNaN(a, b)) {
        return false;
    }

    if (Object.is(a, 0) && Object.is(b, -0)) {
        return true;
    }

    if (Object.is(a, -0) && Object.is(b, 0)) {
        return true;
    }

    if (Object.is(a, b)) {
        return true;
    } else {
        return false;
    };


}