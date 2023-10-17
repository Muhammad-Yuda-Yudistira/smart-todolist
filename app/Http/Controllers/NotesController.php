<?php

namespace App\Http\Controllers;

use App\Models\Note;
use Inertia\Inertia;
use App\Models\category;
use Illuminate\Http\Request;
use Psy\Readline\Hoa\Console;

use function PHPSTORM_META\map;

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
        $notes = $note::where('user_id', null)->orderBy('start_time', 'asc')->get();

        $data = $notes->map(function ($note) {
            $data = [
                'note' => [
                    'id' => $note->id,
                    'days' => $note->days,
                    'start_time' => $note->start_time,
                    'end_time' => $note->end_time,
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
            'categoryId' => 'required|numeric', // Category ID harus ada dan berupa angka
            'startTime' => 'required|string', // Clock harus ada dan berupa string
            'endTime' => 'required|string', // Clock harus ada dan berupa string
            'days' => 'required|array', // Days harus ada dan berupa array
            'description' => 'required|string', // Description harus ada dan berupa string
        ];

        $messages = [
            'categoryId.required' => 'Category ID is required.',
            'categoryId.numeric' => 'Category ID must be a number.',
            'startTime.required' => 'Start time is required.',
            'startTime.string' => 'Start time must be a string.',
            'endTime.string' => 'End time must be a string.',
            'endTime.string' => 'End time must be a string.',
            'days.required' => 'Days is required.',
            'days.array' => 'Days must be an array.',
            'description.required' => 'Description is required.',
            'description.string' => 'Description must be a string.',
        ];

        $request->validate($rules, $messages);

        Note::create([
            'category_id' => $request['categoryId'],
            'user_id' => $request['userId'],
            'start_time' => $request['startTime'],
            'end_time' => $request['endTime'],
            'days' => json_encode($request['days']),
            'body' => $request['description'],
        ]);

        return redirect()->back()->with('message', 'Note has been created!');
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
