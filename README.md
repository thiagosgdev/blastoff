# BLASTOFF

Desafios resolvidos utilizando Javascript, que é a linguagem que possuo mais familiaridade. Venho estudando Nodejs + Typescript há alguns meses. 

O desafio 6 foi bem interessante de fazer, ele e o 13, foram de longe os que mais demorei. Primeiro tentei trabalhar com a data como um todo, 
mas por fim acabei optando por receber apenas as horas como no enunciado. Depois tentei calcular a diferença sem nenhum metódo nativo, mas para
calcular a diferença de hora, quando passou apenas minutos (Ex: 14h40, 15h00 - seria 20 minutos apenas, mas se fizer a conta "normal" daria 1h20)
não consegui chegar a uma conclusão ainda, mas pretendo olhar com mais calma quando tiver mais tempo.

Fiz todos os testes pelo Console do Chrome, apenas abri o arquivo HTML e depois o Console e inseri o comando e inputs. Segue abaixo os exemplos pra cada exercicio.

Exercicio 01:<br/>
averageAge(1, 2, 3, 4, 5)<br/>
Retorno: 3<br/><br/>

Exercicio 02:<br/>
averageKmPerLiter(20, 4)<br/>
Retorno: 5km/l<br/><br/>

Exercicio 03: <br/>
lowestNumber(7,3,12)<br/>
Retorno: 3<br/><br/>

Exericio 04:<br/>
convertCelsiusToFahrenheit(40)<br/>
Retorno: 104<br/><br/>

Exercicio 05<br/>
multipleNumber(81, 3)<br/>
Retorno: 81 é multiplo de 3<br/>

Exercicio 06<br/>
footballMatch("14:08","15:01")<br/>
Retorno: A partida durou: 0 horas e 53 minutos<br/><br/>

Exercicio 07<br/>
evenNumbers([2,3,4,5,8,11,24,25,32])<br/>
Resultado: 'Numeros pares: 2,4,8,24,32'<br/><br/>

Exercicio 08<br/>
cousinNumber(9)<br/>
Resultado Nao<br/>
cousinNumber(125)<br/>
Resultado Nao<br/>
cousinNumber(9)<br/>
Resultado Nao<br/>
cousinNumber(727)<br/>
Resultado: 'O numero 727 é primo'<br/><br/>

Exercicio 09 - Poderia ter colocado para imprimir no console.log com cada multiplicacao, mas achei que assim ficaria mais "ok".<br/>
numberTable(4, 10)<br/>
Resultado: [0, 4, 8, 12, 16, 20, 24, 28, 32, 36, 40]<br/><br/>

Exercicio 10<br/>
factorial(6)<br/>
Resultado: 720<br/><br/>

Exercicio 11<br/>
intersection([1,2,3,4],[1,2,5,8])<br/>
Resultado: '1,2'<br/><br/>

Exercicio 12<br/>
concat([1,2,3,4],[1,2,5,8])<br/>
Resultado: '1,1,2,2,3,5,4,8'<br/><br/>

Exercicio 13 - O primeiro valor é a quantidade de colunas que deseja, segundo a quantidade de linhas e por ultimo o array com os dados.<br/>
matrices(2,3,[1,2,5,8,2,6])<br/>
Resultado: 0: (3) [1, 2, 5]<br/>
           1: (3) [8, 2, 6]<br/><br/>

Exercicio 14 <br/>
palindrome("a grama é amarga")<br/>
Resultado: É um palindromo<br/>
palindrome("osso")<br/>
Resultado: É um palindromo<br/>
palindrome("abacu")<br/>
Resultado: Não é um palindromo<br/><br/>
