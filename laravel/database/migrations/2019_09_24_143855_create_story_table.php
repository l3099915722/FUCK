<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateStoryTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('story', function (Blueprint $table) {
            $table->bigIncrements("id");
            $table->string("name", 100)->comment("故事名称");
            $table->text("content")->comment("故事内容");
            $table->bigInteger("edition_id")->comment("版本号");
            $table->tinyInteger("status")->comment("状态");
            $table->timestamps();

            $table->index("name");
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('story');
    }
}
