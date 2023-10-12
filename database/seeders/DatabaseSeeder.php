<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;

use App\Models\category;
use App\Models\Note;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        Note::factory(12)->create();

        // 'diet', 'workout', 'skincare', 'social', 'psychology', 'science', 'financial'
        category::create([
            'name' => 'diet',
            'slug' => 'diet'
        ]);
        category::create([
            'name' => 'workout',
            'slug' => 'workout'
        ]);
        category::create([
            'name' => 'skincare',
            'slug' => 'skincare'
        ]);
        category::create([
            'name' => 'social',
            'slug' => 'social'
        ]);
        category::create([
            'name' => 'psychology',
            'slug' => 'psychology'
        ]);
        category::create([
            'name' => 'science',
            'slug' => 'science'
        ]);
        category::create([
            'name' => 'financial',
            'slug' => 'financial'
        ]);

        // \App\Models\User::factory(10)->create();

        // \App\Models\User::factory()->create([
        //     'name' => 'Test User',
        //     'email' => 'test@example.com',
        // ]);
    }
}
