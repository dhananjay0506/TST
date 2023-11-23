<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Bussiness extends Model
{
    use HasFactory;
   protected $fillable = [
        'name',
        'email',
        'address',
        'website',
        'contact_person_number',
        'phone_number'
    ];
}
