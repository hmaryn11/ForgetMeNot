function openDesignExamples() {
    let FDesignDiv = document.getElementById("1stDesignExampleDiv");
    let diagBtn = document.getElementById("diagonalButton");

    if (FDesignDiv.classList.contains("d-none")) {
        diagBtn.innerText = "Close Examples";
    }
    else {
        diagBtn.innerText = "View Examples";
    }
/*    FDesignDiv.style.display = "block";*/
    FDesignDiv.classList.toggle("d-none");

    

}