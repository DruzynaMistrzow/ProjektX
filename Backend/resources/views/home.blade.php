
@extends('layouts.app')

@section('content')

<div class="container">
    <div class="row">
        <div class="col-md-8 col-md-offset-2">
            <div class="panel panel-default">



                <table class = "table table-hover">
                  <tr>
                      <th>Name</th>
                      <th>Score</th>
                      <th>Amount of Steps</th>
                  </tr>
                 @foreach($pages as $page)
                  <tr>
                     <td>{{$page->name}}</td>
                    <td>{{$page->score}}</td>
                    <td>{{$page->amountSteps}}</td>
                  </tr>
                @endforeach
              </table>

              {{$pages->links()}}

                <!-- <div class="panel-body">
                    @if (session('status'))
                        <div class="alert alert-success">
                            {{ session('status') }}
                        </div>
                    @endif
                    ?>
                    You are logged in!
                </div> -->
            </div>
        </div>
    </div>
</div>
@endsection
