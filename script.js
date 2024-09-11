
//**les variables**

        const a = 4
        let Mousso = 'Anita'
        
        Mousso = 'Joyce'
        
        Mousso = [ 'Josiane', 'Diana', 'Mardelaine', 'Anifath', 'Merveille']
// variables avec objet
        let Student = {
            name: 'DOSSOU',
            firstname: 'Quirin',
            age: 23,
            city: 'Abomey-Calavi',
            discipline: 'Software Engineering',
            industry: 'IT',
            career: 'Consultant in industies digitalization and automatisation',
            note: [14, 15, 18, 12, 18,]

        }

        Student = {
            name: 'OUSSOU',
            firstname: 'Carlos',
            age: 21,
            city: 'Cap town',
            discipline: 'Data Science',
            industry: 'Marketing',
            career: 'Consultant in economic industries benchmarketing',
            note: [13, 17, 14, 18, 11,]
        }

        
        console.log(Student)

        // les fonctions
        // fonction classiques

        function faireQuelqueChose() {
            console.log( 'Je fais un truc');
           console.log(5 + 6);
           alert('calcul terminé!');

       }

       // faireQuelqueChose()

        // fonction flèchée
        const addition = (a,b) => {
            console.log(a + b);
        };
        
        addition(4,8)