



let string = "";

let buttons = document.querySelectorAll('button');
Array.from(buttons).forEach((button) => {
    button.addEventListener('click', (event) => {

        // Agr html ki string ko ko likh kr = pr click kry th usay evaluate kr do
        if (event.target.innerHTML == '=') {

            string = eval(string)
            document.querySelector('input').value = string;

        }
        else if (event.target.innerHTML == 'C') {
            string = "";
            document.querySelector('input').value = string;

        }
        else {
            string = string + event.target.innerHTML;
            document.querySelector('input').value = string;
            // input k andar


        }




    })
})




