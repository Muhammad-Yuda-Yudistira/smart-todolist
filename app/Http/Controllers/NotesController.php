<?php

namespace App\Http\Controllers;

use App\Models\Note;
use Inertia\Inertia;
use App\Models\category;
use Illuminate\Http\Request;
use Psy\Readline\Hoa\Console;

use function PHPSTORM_META\map;
use Illuminate\Http\RedirectResponse;

class NotesController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Note $note)
    {
        redirect()->back();
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create(Note $note)
    {
        $categories = category::all();
        $notes = $note::orderBy('clock', 'asc')->get();

        $data = $notes->map(function ($note) {
            $data = [
                'note' => [
                    'id' => $note->id,
                    'days' => $note->days,
                    'clock' => $note->clock,
                    'body' => $note->body,
                ], 'category' => [
                    'id' => $note->category->id,
                    'name' => $note->category->name,
                ]
            ];
            return $data;
        });

        return Inertia::render('Content/Notes', ["data" => $data, 'categories' => $categories]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request, Note $note)
    {
        
        $rules = [
            'data.categoryId' => 'required|numeric', // Category ID harus ada dan berupa angka
            'data.clock' => 'required|string', // Clock harus ada dan berupa string
            'data.days' => 'required|array', // Days harus ada dan berupa array
            'data.description' => 'required|string', // Description harus ada dan berupa string
        ];
    
        $messages = [
            'data.categoryId.required' => 'Category ID is required.',
            'data.categoryId.numeric' => 'Category ID must be a number.',
            'data.clock.required' => 'Clock is required.',
            'data.clock.string' => 'Clock must be a string.',
            'data.days.required' => 'Days is required.',
            'data.days.array' => 'Days must be an array.',
            'data.description.required' => 'Description is required.',
            'data.description.string' => 'Description must be a string.',
        ];
    
        $request->validate($rules, $messages);

        Note::create([
            'category_id' => $request['data']['categoryId'],
            'clock' => $request['data']['clock'],
            'days' => json_encode($request['data']['days']),
            'body' => $request['data']['description'],
        ]);
        return redirect()->back()->with('message', 'Note has been created!');
        // batas debug
        //     $request->validate([
        //         'category_id' => 'required',
        //         'clock' => 'required', 'unique:notes',
        //         'body' => 'required'
        //     ]);

        //     // $note::create([
        //     //     'category_id' => $request->data['categoryId'],
        //     //     'clock' => $request->data['clock'],
        //     //     'days' => json_encode($request->data['days']),
        //     //     'body' => $request->data['description'],
        //     // ]);

        //     $note::create($request->all());

        //   return  redirect()->back()->with('message', 'Note has been created!');
        // } catch (\Exception $e) {
        //     return redirect()->back()->with('error', 'Failed to create note: ' . $e->getMessage());
        // }
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        // 
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}
