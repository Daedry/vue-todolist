/* 
Rifare l'esercizio della to do list. 
Questa volta però ogni todo sarà un oggetto, 
formato da due proprietà:
text, una stringa che indica il testo del todo
done, un booleano (true/false) che indica 
se il todo è stato fatto oppure no.

MILESTONE 1
Stampare all'interno di una lista, un item per ogni todo. 
Se la proprietà done è uguale a true, visualizzare il testo del todo sbarrato.

MILESTONE 2
Visualizzare a fianco ad ogni item ha una "x": cliccando su di essa,
il todo viene rimosso dalla lista.
  
MILESTONE 3
Predisporre un campo di input testuale e un pulsante "aggiungi": 
cliccando sul pulsante,il testo digitato viene letto e utilizzato per creare un nuovo todo,
che quindi viene aggiunto alla lista dei todo esistenti.

Bonus:
1- oltre al click sul pulsante, 
intercettare anche il tasto ENTER per aggiungere il todo alla lista
2- cliccando sul testo dell'item, invertire il valore della proprietà 
done del todo corrispondente (se done era uguale a false, 
impostare true e viceversa)
*/

const app = new Vue({
    el: '#app',

    data: {
        addTask: '',
        active: 0,
        todoList:[
            {
                text: 'Fare Calisthenics',
                done: 'true'
            },

            {
                text: 'Ripassare JavaScript',
                done: 'false'
            },

            {
                text: 'Studiare Vuejs',
                done: 'true'
            },

            {
                text: 'Rileggere la documentazione',
                done: 'true'
            },

            {
                text: 'Rivedere le slide',
                done: 'false'
            }
        ]

    },

    methods: {
        removeTodo(i){
            console.log('removeTodo', i);
            this.todoList.splice(i, 1);
        },

        addNewTask(){
            console.log('add task', this.addTask);
            const myNewTask = {
                text: this.addTask,
                done: 'false'
            }
            if(this.addTask === ''){
                alert('inserire qualcosa da fare!!')
            } else {
               
                this.todoList.push(myNewTask);
                this.addTask = '';
            }
        },

        changeDone(todo_done){
            console.log('change done', todo_done)
            if(todo_done === 'false'){
                todo_done = 'true';
                console.log(todo_done);
            } else if (todo_done === 'true'){
                todo_done = 'false';
                console.log(todo_done);

            }
        }

    }
})
