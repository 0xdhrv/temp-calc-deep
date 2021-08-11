// Calculating Vd
function calculateVd(){
    var sd = document.getElementById("sd").value;
    var rt = document.getElementById("rt").value;
    if(sd == "" || rt == ""){
        alert("Please Enter all the Fields for Vd");
    } else {
        var vd = parseFloat(sd) * parseFloat(rt);
        vd = Math.round(vd * 100000) / 100000;
        vd = vd.toFixed(5);
        document.getElementById("vd").innerHTML = vd;
    }  
}

function resetVd() {
    document.getElementById("sd").value = "";
    document.getElementById("rt").value = "";
    document.getElementById("vd").innerHTML = "";
}

// Calculating Sd
function calculateSd(){
    var b = document.getElementById("b").value;
    var w = document.getElementById("w").value;
    if(b == "" || w == ""){
        alert("Please Enter all the Fields for Sd");
    } else {
        var sd1 = parseFloat(b) + parseFloat(w);
        sd1 = Math.round(sd1 * 100000) / 100000;
        sd1 = sd1.toFixed(5);
        document.getElementById("sd1").innerHTML = sd1;
    }  
}

function resetSd() {
    document.getElementById("b").value = "";
    document.getElementById("w").value = "";
    document.getElementById("sd1").innerHTML = "";
}

// Calculating r anf h
function calculateRnH(){
    var vd1 = document.getElementById("vd1").value;
    if(vd1 == "") {
        alert("Please Enter all the Fields for r and h");
    } else {
        var r = Math.cbrt(parseFloat(vd1)/(4*Math.PI));
        r = Math.round(r * 100000) / 100000;
        r = r.toFixed(5);
        var h =  4*r;
        h = Math.round(h * 100000) / 100000;
        h = h.toFixed(5);
        document.getElementById("r").innerHTML = r;
        document.getElementById("h").innerHTML = h;
    }  
}

function resetRnH() {
    document.getElementById("vd1").value = "";
    document.getElementById("r").innerHTML = "";
    document.getElementById("h").innerHTML = "";
}

// Calulating G

function calculateGy(){
    var g = document.getElementById("g").value;
    var vs = document.getElementById("vs").value;
    if(g == "" || vs == ""){
        alert("Please Enter all the Fields for G");
    } else {
        var gy = parseFloat(g) * parseFloat(vs);
        gy = Math.round(gy * 100000) / 100000;
        gy = gy.toFixed(5);
        document.getElementById("gy").innerHTML = gy;
    }  
}

function resetVd() {
    document.getElementById("g").value = "";
    document.getElementById("vs").value = "";
    document.getElementById("gy").innerHTML = "";
}

// Calculating Gp
function calculateGp(){
    var gxx = document.getElementById("gxx").value;
    var vd2 = document.getElementById("vd2").value;
    if(gxx == "" || vd2 == ""){
        alert("Please Enter all the Fields for Gp");
    } else {
        var gp = parseFloat(gxx) / parseFloat(vd2);
        gp = Math.round(gp * 100000) / 100000;
        gp = gp.toFixed(5);
        document.getElementById("gp").innerHTML = gp;
    }  
}

function resetGp() {
    document.getElementById("gxx").value = "";
    document.getElementById("vd2").value = "";
    document.getElementById("gp").innerHTML = "";
}

// Calculating Cs
function calculateCs() {
    var vd3 = document.getElementById("vd3").value;
    const CST = 12650;
    var cs;
    if(between(vd3, 1, 10)){
        cs = vd3 * CST;
    } else if(between(vd3, 11, 25)) {
        cs = ( vd3 * CST) - (1.3 * CST);
    } else if(between(vd3, 26, 100)) {
        cs = ( vd3 * CST) - (1.5 * CST); 
    } else if(between(vd3, 101, 500)) {
        cs = ( vd3 * CST) - (1.7 * CST);
    } else if(between(vd3, 501, 1000)) {
        cs = ( vd3 * CST) - (2 * CST) 
    } else {
        alert("Value of Vd Out of Range [1-1000]\n Please Enter Correct Value");
    }
    cs = Math.round(cs * 100000) / 100000;
    cs = cs.toFixed(5);
    document.getElementById("cs").innerHTML = cs;
}

function resetCs () {
    document.getElementById("vd3").value = "";
    document.getElementById("cs").innerHTML = "";
}

function useVdValue() {
    resetCs();
    var vd = document.getElementById("vd").innerHTML;
    console.log(vd);
    vd = parseFloat(vd);
    if(!isNaN(vd)) {
        var vd3 = vd;
        document.getElementById("vd3").value = vd3;
        const CST = 12650;
        var cs;
        if(between(vd3, 1, 10)){
            cs = vd3 * CST;
        } else if(between(vd3, 11, 25)) {
            cs = ( vd3 * CST) - (1.3 * CST);
        } else if(between(vd3, 26, 100)) {
            cs = ( vd3 * CST) - (1.5 * CST); 
        } else if(between(vd3, 101, 500)) {
            cs = ( vd3 * CST) - (1.7 * CST);
        } else if(between(vd3, 501, 1000)) {
            cs = ( vd3 * CST) - (2 * CST) 
        } else {
            alert("Value of Vd Out of Range [1-1000]\n Please Enter Correct Value");
        }
        cs = Math.round(cs * 100000) / 100000;
        cs = cs.toFixed(5);
        document.getElementById("cs").innerHTML = cs;
    } else {
        alert("No Old Vd Value to Use!\n Check Again");
    }
}

// Helper Function
function between(x, dw, up) {
    return x >= dw && x <= up;
}