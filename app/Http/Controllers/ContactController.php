<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Contact;
class ContactController extends Controller
{
   
    public function index()
    {
        $contact = Contact::all();
        return response()->json(['status' => 200, 'contacts' => $contact]);
    }

   
    public function create()
    {
        //
    }

    public function store(Request $request)
    {
        $contact = new Contact();
        $contact->name = $request->name;
        $contact->email = $request->email;
        $contact->phone = $request->phone;
        $contact->Save();
        
        return response()->json(['status' => 200]);
    }


    public function show($id)
    {
        //
    }


    public function edit($id)
    {
        $contact = Contact::find($id);
        return response()->json(['status' => 200, 'contacts' => $contact]);
    }


    public function update(Request $request, $id)
    {
        $contact = Contact::find($id);
        $contact->name = $request->name;
        $contact->email = $request->email;
        $contact->phone = $request->phone;
        $contact->Save();
        return response()->json(['status' => 200]);
    }

    public function destroy($id)
    {
        $contact = Contact::find($id);
        $contact->delete();
        return response()->json(['status' => 200]);
    }
}
