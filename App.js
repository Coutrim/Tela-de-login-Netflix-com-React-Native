import React, {useState} from 'react';
import CheckBox from '@react-native-community/checkbox';
import {StatusBar} from 'react-native';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  TextInput,
  Linking,
} from 'react-native';

export default function App() {
  const [isSelected, setSelection] = useState(false);
  return (
    <View style={Styles.container}>
      <View style={Styles.form}>
        <Text style={Styles.entrar}>Entrar</Text>
        <TextInput
          placeholder="Email ou número de telefone"
          placeholderTextColor={'#8c8c8c'}
          style={Styles.input}></TextInput>
        <TextInput
          secureTextEntry={true}
          placeholder="Senha"
          placeholderTextColor={'#8c8c8c'}
          style={Styles.input2}></TextInput>
        <View style={Styles.porra}>
          <TouchableOpacity style={Styles.button}>
            <Text style={Styles.buttonText}>Entrar</Text>
          </TouchableOpacity>
          <Text style={Styles.lembreDeMim}>Lembre-se de mim</Text>
          <Text
            style={Styles.help}
            onPress={() => {
              Linking.openURL('https://www.netflix.com/br/LoginHelp');
            }}>
            Precisa de ajuda?
          </Text>

          <Image
            style={Styles.iconFace}
            source={require('./src/assets/face.png')}></Image>
          <Text
            style={Styles.faceAuth}
            onPress={() => {
              Linking.openURL(
                'https://www.facebook.com/login.php?skip_api_login=1&api_key=163114453728333&kid_directed_site=0&app_id=163114453728333&signed_next=1&next=https%3A%2F%2Fwww.facebook.com%2Fv2.9%2Fdialog%2Foauth%3Fapp_id%3D163114453728333%26cbt%3D1647659836660%26channel_url%3Dhttps%253A%252F%252Fstaticxx.facebook.com%252Fx%252Fconnect%252Fxd_arbiter%252F%253Fversion%253D46%2523cb%253Df241678b981888c%2526domain%253Dwww.netflix.com%2526is_canvas%253Dfalse%2526origin%253Dhttps%25253A%25252F%25252Fwww.netflix.com%25252Ff16e553391c292c%2526relation%253Dopener%26client_id%3D163114453728333%26display%3Dpopup%26domain%3Dwww.netflix.com%26e2e%3D%257B%257D%26fallback_redirect_uri%3Dhttps%253A%252F%252Fwww.netflix.com%252Fbr%252Flogin%26locale%3Dpt_BR%26logger_id%3Df1a8f8c3e23e3b4%26origin%3D1%26redirect_uri%3Dhttps%253A%252F%252Fstaticxx.facebook.com%252Fx%252Fconnect%252Fxd_arbiter%252F%253Fversion%253D46%2523cb%253Df18bc08595ae69%2526domain%253Dwww.netflix.com%2526is_canvas%253Dfalse%2526origin%253Dhttps%25253A%25252F%25252Fwww.netflix.com%25252Ff16e553391c292c%2526relation%253Dopener%2526frame%253Df2b009201fea478%26response_type%3Dtoken%252Csigned_request%252Cgraph_domain%26sdk%3Djoey%26version%3Dv2.9%26ret%3Dlogin%26fbapp_pres%3D0%26tp%3Dunspecified&cancel_url=https%3A%2F%2Fstaticxx.facebook.com%2Fx%2Fconnect%2Fxd_arbiter%2F%3Fversion%3D46%23cb%3Df18bc08595ae69%26domain%3Dwww.netflix.com%26is_canvas%3Dfalse%26origin%3Dhttps%253A%252F%252Fwww.netflix.com%252Ff16e553391c292c%26relation%3Dopener%26frame%3Df2b009201fea478%26error%3Daccess_denied%26error_code%3D200%26error_description%3DPermissions%2Berror%26error_reason%3Duser_denied&display=popup&locale=pt_BR&pl_dbl=0',
              );
            }}>
            Conectar com Facebook
          </Text>
          <Text style={Styles.novoAqui}>Novo por aqui?</Text>
          <Text
            onPress={() => {
              Linking.openURL('https://www.netflix.com/br/');
            }}
            style={Styles.acesseAgora}>
            Assine agora.
          </Text>

          <View style={Styles.caixaTexto}>
            <Text style={Styles.lastText}>
              Esta página é protegida pelo Google reCAPTCHA para garantir que
              você não é um robô.<Text style={Styles.saiba}> Saiba mais.</Text>
            </Text>

            <CheckBox
              value={isSelected}
              onValueChange={setSelection}
              style={Styles.checkbox}
              tintColors={{true: '#737373', false: '#737373'}}
            />
          </View>
        </View>
      </View>
    </View>
  );
}

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  form: {
    flex: 1,
    position: 'relative',
    bottom: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  acesseAgora: {
    color: '#fff',
    fontSize: 17,
    bottom: 73,
    left: 7,
  },
  saiba: {
    color: '#0071eb',
  },
  porra: {
    flex: 1,
    height: '100%',
    width: '100%',
    alignItems: 'center',
  },
  novoAqui: {
    color: '#737373',
    fontSize: 16,
    bottom: 50,
    right: 105,
  },
  lastText: {
    color: '#737373',
  },
  caixaTexto: {
    width: '77%',
    bottom: 60,
  },
  entrar: {
    fontSize: 39,
    color: '#FFF',
    alignItems: 'center',
    fontWeight: 'bold',
    marginRight: '52%',
    marginTop: '27%',
  },
  input: {
    backgroundColor: '#333',
    alignItems: 'center',
    justifyContent: 'center',
    height: 55,
    width: '77%',
    top: 200,
    borderRadius: 7,
    paddingLeft: 18,
    fontSize: 16,
    position: 'absolute',
  },
  input2: {
    backgroundColor: '#333',
    alignItems: 'center',
    justifyContent: 'center',
    height: 55,
    width: '77%',
    top: 280,
    borderRadius: 7,
    paddingLeft: 18,
    fontSize: 16,
    position: 'absolute',
  },
  button: {
    backgroundColor: 'red',
    width: '77%',
    height: 55,
    borderRadius: 7,
    bottom: 110,
    paddingVertical: 8,
    marginTop: '80%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 22,
  },
  lembreDeMim: {
    color: '#b3b3b3',
    bottom: 195,
    right: 220,
    fontSize: 14,
    position: 'absolute',
  },
  help: {
    color: '#b3b3b3',
    bottom: 109,
    left: 105,
  },
  iconFace: {
    resizeMode: 'contain',
    height: 30,
    right: 145,
    bottom: 50,
  },
  faceAuth: {
    color: '#737373',
    bottom: 75,
    right: 35,
    fontSize: 15,
  },
  checkbox: {
    bottom: 200,
    left: -6,
  },
});
