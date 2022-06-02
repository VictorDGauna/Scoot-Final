function loadJSON() {

    const request = new Request("../data/rentaltype.json");

    fetch(request)
        .then(function(response) {
            return response.json();
        })
        .then(function(jsonObject) {
            console.log(jsonObject);

            rentalTypeList = jsonObject.rentalTypeList;

            for (let i = 0; i < rentalTypeList.length; i++) {


                divCatalogue = document.querySelector('div.catalogue');

                let divImage = document.createElement("div");
                divImage.className = "catalogue-image";

                let figure = document.createElement("figure");
                let img = document.createElement("img");

                let iconsrc = './img/catalogo/' + rentalTypeList[i].img + '.png';

                img.setAttribute('src', iconsrc);
                img.setAttribute('alt', rentalTypeList[i].rentalType);
                img.style.width = '16.4em';
                img.style.height = '11.4em';

                let figcaption = document.createElement("figcaption");
                figcaption.innerHTML = rentalTypeList[i].rentalType;


                figure.appendChild(img);
                figure.appendChild(figcaption);

                divImage.appendChild(figure);

                let table = document.createElement("table");
                let thead = document.createElement("thead");
                let thead_tr = document.createElement("tr");
                let thead_tr_th = document.createElement("th");
                let thead_tr_th2 = document.createElement("th");

                thead_tr_th.innerHTML = "prices";
                thead_tr_th2.innerHTML = "Description"
                thead_tr.appendChild(thead_tr_th);
                thead_tr.appendChild(thead_tr_th2);
                thead.appendChild(thead_tr);

                let tbody = document.createElement("tbody");
                let tbody_tr1 = document.createElement("tr");
                let reservationHalfDay = document.createElement("th");
                let reservationHalfDayPrice = document.createElement("th");

                reservationHalfDay.innerHTML = "Reservation Half Day";
                reservationHalfDayPrice.innerHTML = rentalTypeList[i].reservationHalfDay

                tbody_tr1.appendChild(reservationHalfDayPrice);
                tbody_tr1.appendChild(reservationHalfDay);

                let tbody_tr2 = document.createElement("tr");
                let reservationFullDay = document.createElement("th");
                let reservationFullDayPrice = document.createElement("th");

                reservationFullDay.innerHTML = "Reservation Full Day";
                reservationFullDayPrice.innerHTML = rentalTypeList[i].reservationFullDay

                tbody_tr2.appendChild(reservationFullDayPrice);
                tbody_tr2.appendChild(reservationFullDay);

                let tbody_tr3 = document.createElement("tr");
                let walkInHalfDay = document.createElement("th");
                let walkInHalfDayPrice = document.createElement("th");

                walkInHalfDay.innerHTML = "Walk-In Half Day";
                walkInHalfDayPrice.innerHTML = rentalTypeList[i].walkInHalfDay

                tbody_tr3.appendChild(walkInHalfDayPrice);
                tbody_tr3.appendChild(walkInHalfDay);

                let tbody_tr4 = document.createElement("tr");
                let walkInFullDay = document.createElement("th");
                let walkInFullDayPrice = document.createElement("th");

                walkInFullDay.innerHTML = "Walk-In Full Day";
                walkInFullDayPrice.innerHTML = rentalTypeList[i].walkInFullDay

                tbody_tr4.appendChild(walkInFullDayPrice);
                tbody_tr4.appendChild(walkInFullDay);

                tbody.appendChild(tbody_tr1);
                tbody.appendChild(tbody_tr2);
                tbody.appendChild(tbody_tr3);
                tbody.appendChild(tbody_tr4);

                table.appendChild(thead);
                table.appendChild(tbody);

                divImage.appendChild(table);
                divCatalogue.appendChild(divImage);
            }


        });
}