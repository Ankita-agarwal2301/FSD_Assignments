package com.stackroute.keepnote.model;

import java.time.LocalDateTime;

import javax.persistence.Entity;
import javax.persistence.Id;

/*
 * The class "Note" will be acting as the data model for the note Table in the database. Please
 * note that this class is annotated with @Entity annotation. Hibernate will scan all package for 
 * any Java objects annotated with the @Entity annotation. If it finds any, then it will begin the 
 * process of looking through that particular Java object to recreate it as a table in your database.
 */
@Entity
public class Note {
	@Id
	public int noteId;
	private String noteTitle, noteContent, noteStatus;
	//@GeneratedValue(strategy = GenerationType.AUTO)
	private LocalDateTime createdAt;

	public Note() {

	}
	
	public Note(int i, String string, String string2, String string3, LocalDateTime localDate) {
		this.noteId = i;
		this.noteTitle = string;
		this.noteContent = string2;
		this.noteStatus = string3;
		this.createdAt = localDate;
	}

	@Override
	public String toString() {
		return "Note [noteId=" + noteId + ", noteTitle=" + noteTitle + ", noteContent=" + noteContent + ", noteStatus="
				+ noteStatus + ", createdAt=" + createdAt + "]";
	}


	public int getNoteId() {

		return this.noteId;
	}

	public String getNoteTitle() {

		return this.noteTitle;
	}

	public String getNoteContent() {

		return this.noteContent;
	}

	public String getNoteStatus() {

		return this.noteStatus;
	}
	
	public LocalDateTime getCreatedAt() {

		return this.createdAt;
	}

	public void setNoteId(int parseInt) {
		this.noteId = parseInt;
	}

	public void setNoteTitle(String parameter) {
		this.noteTitle = parameter;
	}

	public void setNoteContent(String parameter) {
		this.noteContent = parameter;
	}

	public void setNoteStatus(String parameter) {
		this.noteStatus = parameter;
	}

	public void setCreatedAt(LocalDateTime now) {
		this.createdAt = now;
	}

}
