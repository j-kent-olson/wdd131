const input = document.querySelector('#favchap');
const addChapter = document.querySelector('#addChapter')
const list = document.querySelector('#list')


addChapter.addEventListener('click', function() {
    const li = document.createElement('li');
    const deleteButton = document.createElement('button');

    if (input.value.trim() !== '') {
        li.textContent = input.value;
        deleteButton.textContent = '❌';
        li.append(deleteButton);
        list.append(li);
    }
    deleteButton.addEventListener('click', function(){
        li.remove();
    });

    input.value = '';
    input.focus();
});