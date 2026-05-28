package com.example.cardapio.food;

import jakarta.persistence.*;

@Entity
@Table(name = "foods")
public class Food {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private String title;

    @Column(nullable = false)
    private String image;

    @Column(nullable = false)
    private Integer price;

    public Food() {}

    public Food(FoodRequestDTO data) {
        this.title = data.title();
        this.image = data.image();
        this.price = data.price();
    }

    public Long getId() { return id; }

    public String getTitle() { return title; }
    public void setTitle(String title) { this.title = title; }

    public String getImage() { return image; }
    public void setImage(String image) { this.image = image; }

    public Integer getPrice() { return price; }
    public void setPrice(Integer price) { this.price = price; }
}
