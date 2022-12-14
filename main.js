/*Rifare l’esercizio della to do list.
Ogni todo sarà un oggetto, formato da due proprietà:
- `text`, una stringa che indica il testo del todo
- `done`, un booleano (true/false) che indica se il todo è stato fatto oppure no
Steps:
1. avere un elenco di task da fare o fatti
2. stamparli in pagina
3. al click del task fare il toggle del task fatto o meno
4. al click della croce eliminare il task se fatto, altrimenti scrivere un messaggio di errore
5. dopo aver scritto il task con invio o al click del bottone aggiungere il nuovo task (come non fatto) in cima all’elenco dei task
6. verificare la lunghezza minima del nuovo task
7. se l’elenco è vuoto non mostrare la lista ma mostrare il messaggio “Non ci sono task”*/


const { createApp } = Vue;

createApp({
  data(){
    return{
      logoImg: 'logo.png',
      errorString:'',
      tasks:[
        {
          text: 'fare i compiti',
          done: false
        },
        {
          text: 'fare la spesa',
          done: false
        },
        {
          text: 'salvare il mondo',
          done: false
        }
      ]

    }
  },
  methods:{
    toggleDone(index){
        console.log(index);
        this.errorString ='';
        if(this.tasks[index].done){
          // rimuovo
          this.errorString = 'Attenzione! Non si può eliminare il task se non è stato ancora fatto'
          return;
        }else{
          console.log('rimuovo');
        }
      }
    }
  },
  
  
).mount('#app')


