const trips = [
    {
        id: 1,
        departure: "Safi",
        destination: "Youssoufia",
        departureTime: "07:30",
        arrivalTime: "08:30",
        price: 25,
        availableSeats: 50
    },
    {
        id: 2,
        departure: "Safi",
        destination: "Marrakech",
        departureTime: "08:00",
        arrivalTime: "10:30",
        price: 90,
        availableSeats: 50
    },
    {
        id: 3,
        departure: "Safi",
        destination: "Casablanca",
        departureTime: "09:00",
        arrivalTime: "13:00",
        price: 140,
        availableSeats: 50
    },
    {
        id: 4,
        departure: "Youssoufia",
        destination: "Marrakech",
        departureTime: "09:15",
        arrivalTime: "11:00",
        price: 65,
        availableSeats: 50
    },
    {
        id: 5,
        departure: "Youssoufia",
        destination: "Casablanca",
        departureTime: "10:00",
        arrivalTime: "13:30",
        price: 110,
        availableSeats: 50
    },
    {
        id: 6,
        departure: "Marrakech",
        destination: "Casablanca",
        departureTime: "11:30",
        arrivalTime: "14:30",
        price: 120,
        availableSeats: 50
    },
    {
        id: 7,
        departure: "Marrakech",
        destination: "Rabat",
        departureTime: "12:00",
        arrivalTime: "16:00",
        price: 150,
        availableSeats: 50
    },
    {
        id: 8,
        departure: "Casablanca",
        destination: "Rabat",
        departureTime: "14:00",
        arrivalTime: "15:15",
        price: 40,
        availableSeats: 50
    },
    {
        id: 9,
        departure: "Casablanca",
        destination: "Kenitra",
        departureTime: "15:00",
        arrivalTime: "16:45",
        price: 55,
        availableSeats: 50
    },
    {
        id: 10,
        departure: "Rabat",
        destination: "Kenitra",
        departureTime: "16:00",
        arrivalTime: "16:45",
        price: 30,
        availableSeats: 50
    },
    {
        id: 11,
        departure: "Rabat",
        destination: "Fes",
        departureTime: "17:00",
        arrivalTime: "19:30",
        price: 95,
        availableSeats: 50
    },
    {
        id: 12,
        departure: "Kenitra",
        destination: "Fes",
        departureTime: "17:30",
        arrivalTime: "20:00",
        price: 85,
        availableSeats: 50
    },
    {
        id: 13,
        departure: "Fes",
        destination: "Meknes",
        departureTime: "08:30",
        arrivalTime: "09:20",
        price: 35,
        availableSeats: 50
    },
    {
        id: 14,
        departure: "Fes",
        destination: "Oujda",
        departureTime: "10:00",
        arrivalTime: "13:30",
        price: 130,
        availableSeats: 50
    },
    {
        id: 15,
        departure: "Meknes",
        destination: "Rabat",
        departureTime: "11:00",
        arrivalTime: "13:30",
        price: 80,
        availableSeats: 50
    },
    {
        id: 16,
        departure: "Meknes",
        destination: "Casablanca",
        departureTime: "12:00",
        arrivalTime: "15:00",
        price: 105,
        availableSeats: 50
    },
    {
        id: 17,
        departure: "Casablanca",
        destination: "El Jadida",
        departureTime: "16:30",
        arrivalTime: "18:00",
        price: 50,
        availableSeats: 50
    },
    {
        id: 18,
        departure: "El Jadida",
        destination: "Safi",
        departureTime: "18:30",
        arrivalTime: "20:30",
        price: 60,
        availableSeats: 50
    },
    {
        id: 19,
        departure: "Marrakech",
        destination: "Agadir",
        departureTime: "15:00",
        arrivalTime: "18:30",
        price: 100,
        availableSeats: 50
    },
    {
        id: 20,
        departure: "Agadir",
        destination: "Safi",
        departureTime: "19:00",
        arrivalTime: "22:00",
        price: 95,
        availableSeats: 50
    }
];

var prompt = require('prompt-sync')();


function Afficher_trj() {
    console.log(`=== TRAJETS DISPONIBLES === `)
    for(let i=0;i<trips.length;i++){
        console.log(`\n#${trips[i].id}  ${trips[i].departure} → ${trips[i].destination}`
        ,`\n Départ : ${trips[i].departureTime}`
        ,`\nArrivée : ${trips[i].arrivalTime}`
        ,`\nPrix : ${trips[i].price} DH`
        ,`\nPlaces disponibles : ${trips[i].availableSeats}`
                    )
                                }
                        }


const tickets = [];
let next_Ticket_Id=1;
function Achetter_tik() {
    let Passanger_Name = prompt("Saisir Le Nom du Passager : ");
    let Trajet_Id = Number(prompt("Saisir Le Identifiant du trajet : "));   
    
    let Trajet_Trouver =null;
        for(let i = 0;i<trips.length;i++){
            if(trips[i].id === Trajet_Id){
                Trajet_Trouver = trips[i];
                break;
            }    
                                        }
            if(Trajet_Trouver == null){
                console.log("Trajet Introuvable.");
                return;
            }
            if(Trajet_Trouver.availableSeats <=0){
                console.log("Train Complet")
                return;
            }
        
        let takenSeats = [];
        for (let j = 0; j < tickets.length; j++) {
            if (tickets[j].TripId === Trajet_Trouver.id) {
                takenSeats.push(tickets[j].seatNumber);
            }
        }
        let Num_of_Seat = 0;
        for (let seat = 1; seat <= 50; seat++) {
            if (!takenSeats.includes(seat)) {
                Num_of_Seat = seat;
                break;
            }
        }
        
        const ticket = {
            id: next_Ticket_Id,
            passengerName: Passanger_Name,
            TripId :Trajet_Trouver.id,
            seatNumber : Num_of_Seat,
            price: Trajet_Trouver.price
        };
        tickets.push(ticket);

        Trajet_Trouver.availableSeats--;
        next_Ticket_Id++;

    console.log("Ticket acheté avec succès.");
    console.log(`Ticket #${ticket.id}`,
                `\nPassager: ${ticket.passengerName}`,
                `\nTrajet: ${Trajet_Trouver.departure} → ${Trajet_Trouver.destination}`,
                `\nPlace: ${ticket.seatNumber}`,
                `\nPrix: ${ticket.price} DH`);
    
    
                        }


function Afficher_les_tik() {
    if(tickets.length <=0){
        console.log("Aucun ticket enregistré")
        return;
    }
        console.log("=== TICKETS ===")
    for(let i =0;i<tickets.length;i++)
    {
        console.log(`Ticket #${tickets[i].id}`,
                    `\nPassager : ${tickets[i].passengerName}`,
                    `\nTrajet : ${trips[tickets[i].TripId - 1].departure} → ${trips[tickets[i].TripId - 1].destination} `,
                    `\nPlace : ${tickets[i].seatNumber}`,
                    `\nPrix : ${tickets[i].price} DH`)
    }
                            }

 
function Annuler_tik() {
    let ticket_a_supprimer = Number(prompt("Identifiant du ticket : "));

    let ticket_index = -1;
    for(let i=0;i<tickets.length;i++)
        if(tickets[i].id === ticket_a_supprimer){
            ticket_index = i;
            break;
        }
        if(ticket_index === -1)
        {
            console.log("Ticket Introuvable.")
            return;
        }
        let trajet_a_sup_id = tickets[ticket_index].TripId;

    for(let j = 0; j < trips.length; j++) {
        if(trips[j].id === trajet_a_sup_id) {
            trips[j].availableSeats++; 
            break;
        }
    }

    tickets.splice(ticket_index, 1);

    console.log("Ticket annulé avec succès.");   
}


function Rechercher_tik() {
    
}


function Filtrer_les_trj() {
    
}


function Trier_les_trj() {
    
}


function main() {
    let n;
    do {
        console.log("================================")
        console.log("           RAILWAY MANAGER      ")
        console.log("================================") 
        console.log("1. Afficher les trajets");
        console.log("2. Acheter un ticket");
        console.log("3. Afficher les tickets");
        console.log("4. Annuler un ticket");
        console.log("5. Rechercher un ticket");
        console.log("6. Filtrer les trajets");
        console.log("7. Trier les trajets");
        console.log("0. Quitter");
        console.log("");
        
        
        let Input = prompt("Votre choix :");
        n=Number(Input);
 
    switch (n) {
            case 1:
                Afficher_trj()
                break;
            case 2:
                Achetter_tik()
                break;
            case 3:
                Afficher_les_tik()
                break;
            case 4:
                Annuler_tik()
                break;
            case 5:
                Rechercher_tik()
                break;
            case 6: 
                Filtrer_les_trj()
                break;
             case 7: 
                Trier_les_trj()
                break;
        
            default:
                console.log(/*"Votre Choix n'etait pas Valide, Svp donne moi une valeur entre 0 et 7"*/)
                  break;
        }
    } while (n!=0)
}

main()







 