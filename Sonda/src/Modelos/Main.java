
package Modelos;
import Modelos.*;
import java.util.ArrayList;

import java.util.Scanner;
import sonda.Retangulo;
import sonda.nave;



/**
 *
 * @author fabio
 */
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
        
        Scanner entrar = new Scanner(System.in);
        
        System.out.println("Digite a posicação da abscissa da Area");
        int x =  entrar.nextInt();
        
        System.out.println("Digite a posicação da ordenada da Area");
        int y =  entrar.nextInt();
    }
    
}
