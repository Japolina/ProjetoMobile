import { NativeStackScreenProps } from '@react-navigation/native-stack';


type RootStackParamList2 = {
  HomeExer: undefined;
  Exer1: undefined;
  Exer2: undefined;
  Exer3: undefined;
  CadProduto: undefined;
  Produtos: undefined;
};


// Tela Inicial

type HomeExerProps  = NativeStackScreenProps<RootStackParamList2, 'HomeExer'>;

// Exercicio 1

type Exer1Props  = NativeStackScreenProps<RootStackParamList2, 'Exer1'>;

// Exercicio 2

type Exer2Props  = NativeStackScreenProps<RootStackParamList2, 'Exer2'>;

// Exercicio 3

type Exer3Props  = NativeStackScreenProps<RootStackParamList2, 'Exer3'>;

// Cadastro Produtos

type CadProdutoProps  = NativeStackScreenProps<RootStackParamList2, 'CadProduto'>;

// Tela Produto

type ProdutosProps  = NativeStackScreenProps<RootStackParamList2, 'Produtos'>;

export type {HomeExerProps, Exer1Props, Exer2Props, Exer3Props, CadProdutoProps,ProdutosProps, RootStackParamList2};
