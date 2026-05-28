package com.example.cardapio.controller;

import com.example.cardapio.food.Food;
import com.example.cardapio.food.FoodRepository;
import com.example.cardapio.food.FoodRequestDTO;
import com.example.cardapio.food.FoodResponseDTO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/foods")
@CrossOrigin(origins = "*", allowedHeaders = "*")
public class FoodController {

    @Autowired
    private FoodRepository repository;

    @GetMapping
    public ResponseEntity<List<FoodResponseDTO>> getAll() {
        List<FoodResponseDTO> foods = repository.findAll()
                .stream()
                .map(FoodResponseDTO::new)
                .toList();
        return ResponseEntity.ok(foods);
    }

    @GetMapping("/{id}")
    public ResponseEntity<FoodResponseDTO> getById(@PathVariable Long id) {
        return repository.findById(id)
                .map(food -> ResponseEntity.ok(new FoodResponseDTO(food)))
                .orElse(ResponseEntity.notFound().build());
    }

    @PostMapping
    public ResponseEntity<FoodResponseDTO> create(@RequestBody FoodRequestDTO data) {
        Food food = new Food(data);
        Food saved = repository.save(food);
        return ResponseEntity.ok(new FoodResponseDTO(saved));
    }

    @PutMapping("/{id}")
    public ResponseEntity<FoodResponseDTO> update(
            @PathVariable Long id,
            @RequestBody FoodRequestDTO data) {

        return repository.findById(id)
                .map(food -> {
                    food.setTitle(data.title());
                    food.setImage(data.image());
                    food.setPrice(data.price());
                    Food updated = repository.save(food);
                    return ResponseEntity.ok(new FoodResponseDTO(updated));
                })
                .orElse(ResponseEntity.notFound().build());
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> delete(@PathVariable Long id) {
        if (!repository.existsById(id)) {
            return ResponseEntity.notFound().build();
        }
        repository.deleteById(id);
        return ResponseEntity.noContent().build();
    }
}
