import { NativeStackScreenProps } from '@react-navigation/native-stack';


type RootStackParamListUsu = {
  CadastroUsuario: undefined;
  LoginUsuario: undefined;
  TelaInicial: undefined;
  CadastroCliente: undefined;
  CadastroAtend: undefined;
  ListaClientes: undefined;
  ListaAtend: undefined;
  AlterarCliente: {
    id: string; 
    nome: string;
    cpf: string;
    endereco: string;
    dataNasc: string;
  };
  AlterarAtend: { id: string; };
};


// Login 
type LoginUsuProps = NativeStackScreenProps<RootStackParamListUsu, 'LoginUsuario'>;

// Cadastro Usuario

type CadUsuProps = NativeStackScreenProps<RootStackParamListUsu, 'CadastroUsuario'>;

// Tela Inicial

type TelaInicialProps = NativeStackScreenProps<RootStackParamListUsu, 'TelaInicial'>;

// Cadastro Cliente

type CadClienteProps = NativeStackScreenProps<RootStackParamListUsu, 'CadastroCliente'>;

// Lista Clientes

type ListClientesProps = NativeStackScreenProps<RootStackParamListUsu, 'ListaClientes'>;

// Cadastro Atendimento

type CadAtendProps = NativeStackScreenProps<RootStackParamListUsu, 'CadastroAtend'>;

// Lista Atendimento

type ListAtendProps = NativeStackScreenProps<RootStackParamListUsu, 'ListaAtend'>;

// Alterar Cliente 

type AlterarClienteProps = NativeStackScreenProps<RootStackParamListUsu, 'AlterarCliente'>;

// Alterar Atendimento

type AlterarAtendProps = NativeStackScreenProps<RootStackParamListUsu, 'AlterarAtend'>;



export type {
  LoginUsuProps, CadUsuProps, TelaInicialProps,
  CadAtendProps, CadClienteProps, ListClientesProps,
  ListAtendProps, AlterarClienteProps,
  AlterarAtendProps, RootStackParamListUsu
};

