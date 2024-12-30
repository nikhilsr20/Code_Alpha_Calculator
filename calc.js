

const input = document.getElementById('in');
  
input.focus(); 

input.addEventListener('blur', () => {
  input.focus(); 
});


const num = document.querySelectorAll(".button");
num.forEach(button => {
    button.addEventListener('click', () => {
        const input = document.getElementById('in');
        input.focus(); 

        const content = button.innerHTML;
        const cursorPosition = input.selectionStart; 
        if(content=="="){
           let ans=eval(input.value)
           input.value=`${ans}`
        }
        else if(content=="AC"){
            input.value=''
        }
        else{
        const beforeCursor = input.value.substring(0, cursorPosition);
        const afterCursor = input.value.substring(cursorPosition);

       
        input.value = beforeCursor + content + afterCursor;
       
        input.selectionStart = input.selectionEnd = cursorPosition + content.length;
        }


    });
});

