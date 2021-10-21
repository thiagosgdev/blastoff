# BLASTOFF

Desafios resolvidos utilizando Javascript, que é a linguagem que possuo mais familiaridade. Venho estudando Nodejs + Typescript há alguns meses. 

O desafio 6 foi bem interessante de fazer, ele e o 13, foram de longe os que mais demorei. Primeiro tentei trabalhar com a data como um todo, 
mas por fim acabei optando por receber apenas as horas como no enunciado. Depois tentei calcular a diferença sem nenhum metódo nativo, mas para
calcular a diferença de hora, quando passou apenas minutos (Ex: 14h40, 15h00 - seria 20 minutos apenas, mas se fizer a conta "normal" daria 1h20)
não consegui chegar a uma conclusão ainda, mas pretendo olhar com mais calma quando tiver mais tempo.

Fiz todos os testes pelo Console do Chrome, apenas abri o arquivo HTML e depois o Console e inseri o comando e inputs. Segue abaixo os exemplos pra cada exercicio.

Exercicio 01:
averageAge(1, 2, 3, 4, 5)
Retorno: 3

Exercicio 02:
averageKmPerLiter(20, 4)
Retorno: 5km/l

Exercicio 03: 
lowestNumber(7,3,12)
Retorno: 3

Exericio 04:
convertCelsiusToFahrenheit(40)
Retorno: 104

Exercicio 05
multipleNumber(81, 3)
Retorno: 81 é multiplo de 3

Exercicio 06
footballMatch("14:08","15:01")
Retorno: A partida durou: 0 horas e 53 minutos

Exercicio 07
evenNumbers([2,3,4,5,8,11,24,25,32])
Resultado: 'Numeros pares: 2,4,8,24,32'

Exercicio 08
cousinNumber(9)
Resultado Nao
cousinNumber(125)
Resultado Nao
cousinNumber(9)
Resultado Nao
cousinNumber(727)
Resultado: 'O numero 727 é primo'

Exercicio 09 - Poderia ter colocado para imprimir no console.log com cada multiplicacao, mas achei que assim ficaria mais "ok".
numberTable(4, 10)
Resultado: [0, 4, 8, 12, 16, 20, 24, 28, 32, 36, 40]

Exercicio 10
factorial(6)
Resultado: 720

Exercicio 11
intersection([1,2,3,4],[1,2,5,8])
Resultado: '1,2'

Exercicio 12
concat([1,2,3,4],[1,2,5,8])
Resultado: '1,1,2,2,3,5,4,8'

Exercicio 13 - O primeiro valor é a quantidade de colunas que deseja, segundo a quantidade de linhas e por ultimo o array com os dados.
matrices(2,3,[1,2,5,8,2,6])
Resultado: 0: (3) [1, 2, 5]
           1: (3) [8, 2, 6]

Exercicio 14 
palindrome("a grama é amarga")
Resultado: É um palindromo
palindrome("osso")
Resultado: É um palindromo
palindrome("abacu")
Resultado: Não é um palindromo
