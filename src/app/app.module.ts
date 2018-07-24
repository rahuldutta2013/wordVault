import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { TemplateDataService } from './services/template-data.service';
import { EventManager } from './services/event-manager.service';
import { QuizComponent } from './quiz/quiz.component';
import { QuestionComponent } from './quiz/question/question.component';
import { OptionsComponent } from './quiz/options/options.component';
import { ValidatorComponent } from './quiz/validator/validator.component';
import { UserResponseService } from './services/user-response.service';
import { SpriteAnimationComponent } from './components/sprite-animation/sprite-animation.component';
import { SpriteAnimationDataService } from './services/sprite-animation-data.service';
import { SoundService } from './services/sound.service';
import { HelpComponent } from './components/help/help.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavigationComponent,
    QuizComponent,
    QuestionComponent,
    OptionsComponent,
    ValidatorComponent,
    SpriteAnimationComponent,
    HelpComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [TemplateDataService, EventManager, UserResponseService, SpriteAnimationDataService, SoundService],
  bootstrap: [AppComponent]
})
export class AppModule { }
