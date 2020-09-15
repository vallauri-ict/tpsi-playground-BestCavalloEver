var rows = 10;
var cols = 10;
var dim = 10;
var mines = 10;
var flags = mines;
var mat = new Array(rows);
var campo = new Array(rows);

$(document).ready(function (){
	var caselle = dim*dim-mines;
	$("#band").text(flags);
	start();
    // CREO LE DUE MATRICI
    for (let row = 0; row < dim; row++) {
        campo[row] = new Array(dim);
        mat[row] = new Array(dim);
        for (let col = 0; col < dim; col++) {
            mat[row][col] = {};
            mat[row][col].mine = false;
            mat[row][col].revealed = false;
            mat[row][col].flagged = false;
			mat[row][col].number = -1;
        }
    }

    // INSERISCO LE BOMBE NELLA MATRICE MAT
    for (let m = 0; m < mines; m++)
    {
        let randRow;
        let randCol;
		do{
			randRow = rand();
			randCol = rand();
		}while(mat[randRow][randCol].mine == true);
        mat[randRow][randCol].mine = true;
    }

    contaBombe();

    for (let row = 0; row < dim; row++) {
        for (let col = 0; col < dim; col++) {
            var ypos = col * 26+200-(10*dim);
            var xpos = row * 26 + 125;

            campo[row][col] = $("<div> </div>");
            campo[row][col].css({
                position: "absolute",
                height: "22px",
                width: "22px",
                border: "2px outset",
                textAlign: "center",
                "border-color": "#a6bfab",
                "background-color": "#828f84",
                top: xpos,
                left: ypos
            });
            campo[row][col].click(function () {
                scopri(row, col);
            });
            campo[row][col].contextmenu(function(){
                flagga(row, col);
                return false;
            });
            campo[row][col].attr("id",row+"-"+col);
            $("#container").append(campo[row][col]);
        }
    }

    function rand()
    {
        return Math.floor(Math.random()*dim);
    }

    function scopri(row, col)
    {
        if(row >= 0 && row < dim && col >= 0 && col < dim)
        {
            if(mat[row][col].revealed == false && mat[row][col].flagged == false)
            {
                mat[row][col].revealed = true;
                var image;
                if(mat[row][col].mine == true)
				{
				    image = "bomba.png";
					$("#"+row+"-"+col).css("background-image","url(./img/"+image+")");
					finish("Lost")
				}

                else
				{
					image = mat[row][col].number+".png";
					$("#"+row+"-"+col).css("background-image","url(./img/"+image+")");
					caselle--;
					if(caselle == 0)
					{
						finish("Win");						
					}
				}			
				
				if(mat[row][col].number == 0)
                {
                    scopri(row-1,col-1);
                    scopri(row-1,col);
                    scopri(row-1,col+1);
                    scopri(row, col-1);
                    scopri(row,col+1);
                    scopri(row+1,col-1);
                    scopri(row+1,col);
                    scopri(row+1, col+1);
                }                   
            }
        }
    }

    function flagga(row, col)
    {
        if(mat[row][col].revealed == false)
        {
            if(mat[row][col].flagged == true)
            {
                mat[row][col].flagged = false;
                $("#"+row+"-"+col).css("background-image","none");
				flags++;
            }
            else
            {
                mat[row][col].flagged = true;
                $("#"+row+"-"+col).css("background-image","url(./img/flag.png)");
				flags--;
            }
			$("#band").text(flags);
        }
    }

    function contaBombe(){
        for(let row = 0; row < dim; row++)
        {
            for(let col = 0; col < dim; col++)
            {
                if(mat[row][col].mine == false)
                {
                    mat[row][col].number = conta(row, col);
                    $("#"+row+"-"+col).addClass("numero"+mat[row][col].number);
                }
            }
        }
    }

    function conta(row, col)
    {
        var n = 0;

        if(row - 1 > -1 && col - 1 > -1) // alto sinistra
            if(mat[row-1][col-1].mine == true)
                n++;

        if(col-1 > -1)
            if(mat[row][col-1].mine == true) // sinistra
                n++;

        if(row+1 < dim && col-1 > -1) // basso sinistra
            if(mat[row+1][col-1].mine == true)
                n++;

        if(row+1 < dim) // basso
            if(mat[row+1][col].mine == true)
                n++;

        if(row+1 < dim && col +1 < dim) // basso destra
            if(mat[row+1][col+1].mine == true)
                n++;

        if(col + 1 < dim) // destra
            if(mat[row][col+1].mine == true)
                n++;

        if(row-1 > -1 && col + 1 < dim) // alto destra
            if(mat[row-1][col+1].mine == true)
                n++;

        if(row-1 > -1) // alto
            if(mat[row-1][col].mine == true)
                n++;

        return n;
    }
	
	function finish(ris)
	{
		stop();
			switch(ris)
			{
				case "Win":
					alert("Bravissimo hai vinto");
					break;
				case "Lost":
					alert("SCARSOOOO HAI PERSO");
					break;
			}
			location.reload(true);
			start();
	}
	
	
	
	var t,p=0,k=1,s=1,q=1,t2;
function start() {
    t=setInterval(m1,1000);
    t2=setInterval(m2,9);
}
function m2() {
    if(p<=9)
    document.getElementById("timer1").innerHTML="0"+p;
    else
    document.getElementById("timer1").innerHTML=p;
    p++;
    if(p== 100)
    p=0;
}

function m1() {
    
    if(k<=9)
    document.getElementById("timer2").innerHTML="0"+k;
    else
        document.getElementById("timer2").innerHTML=k;
        k++;
        if(k == 61) {
        if(s <= 9)
            document.getElementById("timer3").innerHTML="0"+s;
            else
            document.getElementById("timer3").innerHTML=s;
            s++;
            if(s == 61) {
            if(q<=9)
                document.getElementById("timer4").innerHTML="0"+q;
                else
                document.getElementById("timer4").innerHTML=q;
                q++;
                document.getElementById("timer4").innerHTML="00";
                s=1;
            }
            document.getElementById("timer2").innerHTML="00";
            k=1;
        }
}
function stop() {
    clearInterval(t);
    clearInterval(t2);
}
});















/*function changeDimesnion(value)
{
    var dim = value.split('x');
    var mine = Math.floor(dim[0]*dim[0]/4);
    $("#mines p").text("Number of mines: "+mine);
}

function clickChk(chk)
{
    if(chk.checked)
    {
        $("#insertDim").prop("disabled",false);
        $("select").prop("disabled",true);
    }
    else
    {
        $("#insertDim").prop("disabled",true);
        $("select").prop("disabled",false);
    }
}

function startGame()
{
    var chk = $("#chk");
    if(chk.checked === true)
    {
        window.location = window.location.href.replace("begin.html","index.html")+"10";
    }
    else
        window.location = window.location.href.replace("begin.html","index.html")+"5";
}*/
