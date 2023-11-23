<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\Bussiness;

class TestController extends Controller
{


    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        // return $request;
        //
        Bussiness::create([
            "name" => $request->name,
            "email" => $request->email,
            "address" => $request->address,
            "website" => $request->website,
            "contact_person_number" => $request->contact_person_number,
            "phone_number" => $request->phone_number,

        ]);

    }

    /**
     * Display the specified resource.
     */
    public function show() {

        return Inertia::render('Test', [
            'data' => Bussiness::all()
        ]);
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
