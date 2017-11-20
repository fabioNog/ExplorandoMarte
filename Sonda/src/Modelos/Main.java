
package Modelos;
import Modelos.*;
import java.awt.Color;
import java.util.ArrayList;

import java.util.Scanner;


public class Main {

    /**
     * @param args the command line arguments
     */
    public static void main(String[] args) {
        
        Janela NJanela = new Janela("Jogo da Sonda");
        ArrayList A1 = new ArrayList();
        
        Painel NPainel = new Painel(A1);
        
        NJanela.add(NPainel);
        NJanela.setSize(500,400);
        NJanela.setVisible(true);
        Coordenada cor1 = new Coordenada(100,400);
        Coordenada cor2 = new Coordenada(250,530);
        Coordenada cor3 = new Coordenada(200,200);
        
        

        
        NaveGrafico nave = new NaveGrafico(cor1,cor2,cor3,Color.red);
        A1.add(nave);
        
        Scanner entrar = new Scanner(System.in);
        
        System.out.println("Digite a posicação da abscissa da Area");
        int x =  entrar.nextInt();
        
        System.out.println("Digite a posicação da ordenada da Area");
        int y =  entrar.nextInt();
    }
    
}
