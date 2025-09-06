package com.maisprati;

import com.maisprati.models.Produto;

//TIP To <b>Run</b> code, press <shortcut actionId="Run"/> or
// click the <icon src="AllIcons.Actions.Execute"/> icon in the gutter.
public class Main {
    public static void main(String[] args) {
            try {
                Produto p1 = new Produto("Notebook Asus", 4500.0, 6);
                System.out.println("Produto criado: " + p1);

                p1.setPreco(2999.99);
                p1.setQuantidadeEmEstoque(15);
                p1.setNome("Notebook Gamer");
                System.out.println("Produto atualizado: " + p1);

                System.out.println("\nTestando valores inválidos...");

                try {
                    p1.setPreco(-100);
                } catch (IllegalArgumentException e) {
                    System.out.println("Erro: " + e.getMessage());
                }

                try {
                    p1.setQuantidadeEmEstoque(-5);
                } catch (IllegalArgumentException e) {
                    System.out.println("Erro: " + e.getMessage());
                }

                try {
                    p1.setNome("");
                } catch (IllegalArgumentException e) {
                    System.out.println("Erro: " + e.getMessage());
                }

                try {
                    Produto p2 = new Produto(null, 100, 1);
                } catch (IllegalArgumentException e) {
                    System.out.println("Erro ao criar produto: " + e.getMessage());
                }

            } catch (Exception e) {
                System.out.println("Erro inesperado: " + e.getMessage());
            }

    }
}