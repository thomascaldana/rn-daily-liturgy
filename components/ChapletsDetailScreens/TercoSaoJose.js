import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Prayers from '../../Prayers.json'
import styles from './Styles';

const TercoSaoJose = ({ route }) => {

  const navigation = useNavigation();

  const handleClose = () => {
    // Navigate back to the list of prayers
    navigation.goBack();
  };

  return (
    <ScrollView>
      <View style={styles.container}>
        <TouchableOpacity onPress={handleClose} style={styles.closeButton}>
          <Text style={styles.closeButtonText}>×</Text>
        </TouchableOpacity>
        <View style={[styles.header, styles.paddingTopStyles]}>
        </View>
        <Text style={[styles.text, styles.boldStyle]}>Terço a São José</Text>

        <Text style={[styles.paddingTopStyles, styles.text]}>

          {`
Nas contas grandes:

Meu glorioso São José, nas vossas maiores aflições e tribulações, não vos valeu o anjo do Senhor? Valei-me, São José!


Nas contas pequenas:

Valei-me, São José.

Meditações:

1º Mistério:

Contemplamos a Aparição do anjo do Senhor, em sonhos, a José.

Mt 1,18-25
18.Eis como nasceu Jesus Cristo: Maria, sua mãe, estava desposada com José. Antes de coabitarem, aconteceu que ela concebeu por virtude do Espírito Santo. 19.José, seu esposo, que era homem de bem, não querendo difamá-la, resolveu rejeitá-la secretamente. 20.Enquanto assim pensava, eis que um anjo do Senhor lhe apareceu em sonhos e lhe disse: José, filho de Davi, não temas receber Maria por esposa, pois o que nela foi concebido vem do Espírito Santo. 21.Ela dará à luz um filho, a quem porás o nome de Jesus, porque ele salvará o seu povo de seus pecados. 22.Tudo isto aconteceu para que se cumprisse o que o Senhor falou pelo profeta: 23.Eis que a Virgem conceberá e dará à luz um filho, que se chamará Emanuel (Is 7, 14), que significa: Deus conosco. 24.Despertando, José fez como o anjo do Senhor lhe havia mandado e recebeu em sua casa sua esposa. 25.E, sem que ele a tivesse conhecido, ela deu à luz o seu filho, que recebeu o nome de Jesus.


2º Mistério:

Contemplamos José no presépio com o recém-nascido e Maria.

Lc 2,1-16
1.Naqueles tempos apareceu um decreto de César Augusto, ordenando o recenseamento de toda a terra. 2.Este recenseamento foi feito antes do governo de Quirino, na Síria. 3.Todos iam alistar-se, cada um na sua cidade. 4.Também José subiu da Galiléia, da cidade de Nazaré, à Judéia, à Cidade de Davi, chamada Belém, porque era da casa e família de Davi, 5.para se alistar com a sua esposa Maria, que estava grávida. 6.Estando eles ali, completaram-se os dias dela. 7.E deu à luz seu filho primogênito, e, envolvendo-o em faixas, reclinou-o num presépio; porque não havia lugar para eles na hospedaria. 8.Havia nos arredores uns pastores, que vigiavam e guardavam seu rebanho nos campos durante as vigílias da noite. 9.Um anjo do Senhor apareceu-lhes e a glória do Senhor refulgiu ao redor deles, e tiveram grande temor. 10.O anjo disse-lhes: Não temais, eis que vos anuncio uma boa nova que será alegria para todo o povo: 11.hoje vos nasceu na Cidade de Davi um Salvador, que é o Cristo Senhor. 12.Isto vos servirá de sinal: achareis um recém-nascido envolto em faixas e posto numa manjedoura. 13.E subitamente ao anjo se juntou uma multidão do exército celeste, que louvava a Deus e dizia: 14.Glória a Deus no mais alto dos céus e na terra paz aos homens, objetos da benevolência (divina). 15.Depois que os anjos os deixaram e voltaram para o céu, falaram os pastores uns com os outros: Vamos até Belém e vejamos o que se realizou e o que o Senhor nos manifestou. 16.Foram com grande pressa e acharam Maria e José, e o menino deitado na manjedoura.



3º Mistério:
Contemplamos a fuga para o Egito.

Mt 2,13-15
13.Depois de sua partida, um anjo do Senhor apareceu em sonhos a José e disse: Levanta-te, toma o menino e sua mãe e foge para o Egito; fica lá até que eu te avise, porque Herodes vai procurar o menino para o matar. 14.José levantou-se durante a noite, tomou o menino e sua mãe e partiu para o Egito. 15.Ali permaneceu até a morte de Herodes para que se cumprisse o que o Senhor dissera pelo profeta: Eu chamei do Egito meu filho (Os 11,1).



4º Mistério:
Contemplamos a apresentação de Jesus no Templo.

Lc 2,22-39
22.Concluídos os dias da sua purificação segundo a Lei de Moisés, levaram-no a Jerusalém para o apresentar ao Senhor, 23.conforme o que está escrito na lei do Senhor: Todo primogênito do sexo masculino será consagrado ao Senhor (Ex 13,2); 24.e para oferecerem o sacrifício prescrito pela lei do Senhor, um par de rolas ou dois pombinhos. 25.Ora, havia em Jerusalém um homem chamado Simeão. Este homem, justo e piedoso, esperava a consolação de Israel, e o Espírito Santo estava nele. 26.Fora-lhe revelado pelo Espírito Santo que não morreria sem primeiro ver o Cristo do Senhor. 27.Impelido pelo Espírito Santo, foi ao templo. E tendo os pais apresentado o menino Jesus, para cumprirem a respeito dele os preceitos da lei, 28.tomou-o em seus braços e louvou a Deus nestes termos: 29.Agora, Senhor, deixai o vosso servo ir em paz, segundo a vossa palavra. 30.Porque os meus olhos viram a vossa salvação 31.que preparastes diante de todos os povos, 32.como luz para iluminar as nações, e para a glória de vosso povo de Israel. 33.Seu pai e sua mãe estavam admirados das coisas que dele se diziam. 34.Simeão abençoou-os e disse a Maria, sua mãe: Eis que este menino está destinado a ser uma causa de queda e de soerguimento para muitos homens em Israel, e a ser um sinal que provocará contradições, 35.a fim de serem revelados os pensamentos de muitos corações. E uma espada transpassará a tua alma. 36.Havia também uma profetisa chamada Ana, filha de Fanuel, da tribo de Aser; era de idade avançada. 37.Depois de ter vivido sete anos com seu marido desde a sua virgindade, ficara viúva, e agora com oitenta e quatro anos não se apartava do templo, servindo a Deus noite e dia em jejuns e orações. 38.Chegando ela à mesma hora, louvava a Deus e falava de Jesus a todos aqueles que em Jerusalém esperavam a libertação. 39.Após terem observado tudo segundo a lei do Senhor, voltaram para a Galiléia, à sua cidade de Nazaré.



5º Mistério:
Contemplamos o reencontro de José e Maria com Jesus, no Templo.

Lc 2,41-51
41.Seus pais iam todos os anos a Jerusalém para a festa da Páscoa. 42.Tendo ele atingido doze anos, subiram a Jerusalém, segundo o costume da festa. 43.Acabados os dias da festa, quando voltavam, ficou o menino Jesus em Jerusalém, sem que os seus pais o percebessem. 44.Pensando que ele estivesse com os seus companheiros de comitiva, andaram caminho de um dia e o buscaram entre os parentes e conhecidos. 45.Mas não o encontrando, voltaram a Jerusalém, à procura dele. 46.Três dias depois o acharam no templo, sentado no meio dos doutores, ouvindo-os e interrogando-os. 47.Todos os que o ouviam estavam maravilhados da sabedoria de suas respostas. 48.Quando eles o viram, ficaram admirados. E sua mãe disse-lhe: Meu filho, que nos fizeste?! Eis que teu pai e eu andávamos à tua procura, cheios de aflição. 49.Respondeu-lhes ele: Por que me procuráveis? Não sabíeis que devo ocupar-me das coisas de meu Pai? 50.Eles, porém, não compreenderam o que ele lhes dissera. 51.Em seguida, desceu com eles a Nazaré e lhes era submisso. Sua mãe guardava todas estas coisas no seu coração.


No fim, reze este oferecimento:

“A vós, glorioso São José, ofereço este terço em louvor e glória de Jesus e Maria, para que seja minha luz e guia, minha proteção e defesa, minha fortaleza e alegria em todos os meus trabalhos e tribulações, principalmente na hora da agonia.

Pelo nome de Jesus, pela glória de Maria, imploro o vosso poderoso patrocínio, para que me alcanceis a graça que tanto desejo. Falai em meu favor, advogai a minha causa no Céu e na Terra, alegrai a minha alma para honra de Jesus, de Maria e vossa. Amém.”
`}
        </Text>

      </View>
    </ScrollView>
  );
};

export default TercoSaoJose;