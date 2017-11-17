
package sonda;
import Modelos.*;

import java.util.Scanner;



/**
 *
 * @author fabio
 */
public class Main {

    /**
     * @param args the command line arguments
     */
    public static void main(String[] args) {
        
        Scanner entrar = new Scanner(System.in);
        
        System.out.println("Digite a posicação da abscissa da Area");
        int x =  entrar.nextInt();
        
        System.out.println("Digite a posicação da ordenada da Area");
        int y =  entrar.nextInt();
        
        Area A = new Area(x,y);
        nave N = A.getNave();
        
        System.out.println("Digite a posicação da abscissa da nave");
        int xNave =  entrar.nextInt();
        
        System.out.println("Digite a posicação da ordenada da Area");
        int yNave =  entrar.nextInt();
        
        System.out.println("Digite a direção inicial da nave");
        String dirNave =  entrar.next();
        N.setX(xNave);
        N.setY(yNave);
        N.setDir(dirNave);
        String Dir = A.getNave().getDir();
        System.out.println(Dir);
    }
    
}
