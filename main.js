


function makebook(title, author, price) {
    var obj={}
    obj.title=title
    obj.author=author
    obj.price=price
    return obj
}

var annakarenina=makebook("Anna Karenina", "Leo Toltsoy",50)
var wutheringheights=makebook("Wuthering Heights","Emily Brontë",40)
var thebrotherskaramasov=makebook("The Brothers Karamasov","Fyodor Dostoevsky",35)
var janeEyre=makebook("Jane Eyre","Charlotte Brontë",40)
var crimeAndPunishement=makebook("Crime And Punishment", "Fyodor Dostoevsky", 45)
var thefabricofthecosmos=makebook("The Fabric Of The Cosmos", "Brian Greene", 35)
var thesecrethistory=makebook("The Secret History","Donna Tartt",60)
var thegoldfinch=makebook("The Golfinch","Donna Tartt",50)
var warandpeace=makebook("War And Peace", "Leo Toltsoy",70)
var thePictureOfDorianGray=makebook("The Picture Of Dorian Gray","Oscar Wilde",30)
var metamporphosis=makebook("The Metamorphosis","Franz Kafka",30)
var thestranger=makebook("The Stranger","Albert Camus",20)
var thecatcherintherye=makebook("The Catcher In The Rye", "J.D. Salinger", 25)
var notesfromunderground=makebook("Notes From The Underground","Fyodor Dostoevsky",30)
var theBellJar=makebook("The Bell Jar","Sylvia Plath",40)
var georgeorwell=makebook("1984", "George Orwell",35)
var thegrandgatsby=makebook("The Great Gatsby","F. Scott Fitzgerald",40)
var tokillamocking=makebook("To Kill a Mocking Bird","Harper Lee", 25)
var theFaultInour=makebook("The Fault In Our Stars","John Green",35)
var harryPotter=makebook("Harry Potter and the Sorcerer's Stone", "J.K. Rowling",25)
var thehungergames=makebook("The Hunger Games","Suzanne Collins",45)


var list=[]
function makelist(object) {
    list.push(object)
}

makelist(annakarenina)
makelist(wutheringheights)
makelist(thebrotherskaramasov)
makelist(janeEyre)
makelist(crimeAndPunishement)
makelist(thefabricofthecosmos)
makelist(thesecrethistory)
makelist(thegoldfinch)
makelist(warandpeace)
makelist(thePictureOfDorianGray)
makelist(metamporphosis)
makelist(thestranger)
makelist(thecatcherintherye)
makelist(notesfromunderground)
makelist(theBellJar)
makelist(georgeorwell)
makelist(thegrandgatsby)
makelist(tokillamocking)
makelist(theFaultInour)
makelist(harryPotter)
makelist(thehungergames)

$('.books img').click(function() {
    var imgSrc = $(this).attr('src');
    var imgid = $(this).attr('id');
    switchToBookDetails(imgSrc); 
});

function switchToBookDetails(source) {
   $("body").load("main2.html", function() {
       $('#imgDes').attr('src', source);

   });
}

var home0 = document.getElementById('homeBtn')


home0.addEventListener('click', function() {
    backHome();
});

function backHome() {
    $("body").load("main3.html");
}

$("#btnOk").click(function(){
    for(var i=0; i<list.length; i++){
        if(($("#reasearchBar").val()).toLowerCase()===list[i].title.toLowerCase()){
            
        }
    }
})


