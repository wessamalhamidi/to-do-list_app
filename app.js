const input = document.querySelector('.input');
const button = document.querySelector('.button');
/* const task = document.querySelector('.tasks'); */

button.addEventListener('click', (event) =>{
    event.stopPropagation();
    const element =document.createElement('p');
    const remove = document.createElement('span');
    remove.innerHTML = 'Remove';
    element.innerHTML = input.value;

    // If the use didn't enter any text then will alert him
    if (input.value === ''){
        alert('Please enter the task');
    }else{
        document.querySelector('.tasks').appendChild(element);
        element.appendChild(remove)
        input.value = '';

        // draw line throught the task when completed
        element.addEventListener('click', (event) =>{
            event.stopPropagation();
            element.style.textDecoration = 'line-through';
        });

        // Removes the task when clicked
        remove.addEventListener('click', (event) =>{
            event.stopPropagation();
            element.remove();
            remove.remove();
            
        });
    }
})
