<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Note>
 */
class NoteFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        $days = fake()->randomElements(['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'], fake()->numberBetween(1, 7));

        return [
            'days' => json_encode($days),
            'clock' => fake()->time(),
            'body' => fake()->paragraph(),
            'category_id' => mt_rand(1, 7)
        ];
    }
}
