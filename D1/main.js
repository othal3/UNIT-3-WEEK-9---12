window.onload = function () {
    let remove = document.querySelector("aside div:nth-of-type(3) :nth-child(2) :nth-child(2)");
    remove.remove();
};

for (let link of document.querySelectorAll(".stretched-link")) 
    link.onclik = function (event) {
    this.closest(".col-md-6").remove;
    };

